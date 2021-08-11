import React, { Component } from 'react';

import PropsType from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import {DataGrid, GridOverlay, 
  GridToolbarContainer, 
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
  GridDensitySelector, 
  GridToolbarExport} from '@material-ui/data-grid';
import { Box, Typography, Tooltip } from '@material-ui/core';

import CellExpand from './_gears/CellExpand';

import { StyledLinearProgress, StyledIconButton } from '@IZOArc/LabIZO/Stylizo';
import { HStack, Spacer, VStack } from '@IZOArc/LabIZO/Stackizo';
import { Accessor, Authority, ColorX, store } from '@IZOArc/STATIC';

/**
 * Tablizo - displaying rows of data
 * @augments {Component<Props, State>}
 */
class Tablizo extends Component {

  static propTypes = {

    //container
    height: PropsType.oneOfType([PropsType.number, PropsType.string]),
    width: PropsType.oneOfType([PropsType.number, PropsType.string]),

    //function
    onMounted: PropsType.func,
  
    //runtime data
    schema: PropsType.array,
    data: PropsType.array,
    loading: PropsType.bool,

    //inline operation
    inlineButtons: PropsType.array,
    inlineButtonsAlign: PropsType.string,
    inlineButtonsOpposite: PropsType.array,

    //listener
    onRowSelected: PropsType.func,
    onFilterChange: PropsType.func,
    onSortChange: PropsType.func,

    //selector
    showSelector: PropsType.bool,
    rowIdAccessor: PropsType.string,
    selectionOnClick: PropsType.bool,

    //pagination
    pagination: PropsType.bool,
    serverSidePagination: PropsType.bool,
    rowCount: PropsType.number,
    onPageChange: PropsType.func,
    onPageSizeChange: PropsType.func,

    //no data overlay
    noRowsOverlay: PropsType.element,

    //pagesize
    defaultPageSize: PropsType.number,
    pageSizeOption: PropsType.arrayOf(PropsType.number),

    //authority
    auth: PropsType.object,
    level: PropsType.number,

    //addOns
    addOns: PropsType.object,

    //preset toolbar
    columnsToolbar: PropsType.bool,
    filterToolbar: PropsType.bool,
    densityToolbar: PropsType.bool,
    exportToolbar: PropsType.bool,

    //preset
    density: PropsType.oneOf(["compact", "comfortable", "standard"]),

  }

  static defaultProps = {
    height: "500px",
    width: "100%",

    onMounted: undefined,

    schema: [],
    data: [],
    loading: false,

    inlineButtons: [],
    inlineButtonsAlign: "left",
    inlineButtonsOpposite: [],

    showSelector: true,
    rowIdAccessor: "_id",
    selectionOnClick: false,

    pagination: true,
    serverSidePagination: false,
    rowCount: 0,
    onPageChange: () => {},
    onPageSizeChange: () => {},

    noRowsOverlay: undefined,

    defaultPageSize: 25,
    pageSizeOption: [25, 50, 100],

    auth: {},
    level: 999,

    addOns: {},

    columnsToolbar: false,
    filterToolbar: false,
    densityToolbar: false,
    exportToolbar: false,

    density: "standard",

    store: {}
  }

  constructor(){
    super();
    this.state = {
      selectedRows: []
    };
  }

  componentDidMount(){
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(Tablizo.defaultProps))){
      this._setAllStates();
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
        return;
    };
  }

  _setAllStates = (callback) => {
    this.setState((state, props) => ({
      ...props,
    }), () => {
      if(this.props.onMounted){
        this.props.onMounted({
          GetSelectedRows: this._GetSelectedRows,
          ClearSelected: this._ClearSelected
        });
      }
      if(callback) callback();
    });
  }

  _onRowSelected = (params) => {
    let {onRowSelected} = this.props;
    this.setState({
      selectedRows: params.selectionModel
    });
    if(onRowSelected){
      onRowSelected(params.selectionModel.length);
    }
  }

  _ClearSelected = () => {
    let {onRowSelected} = this.props;
    this.setState({
      selectedRows: []
    });
    if(onRowSelected){
      onRowSelected(0);
    }
  }

  _onFilterChange = (params) => {
    let {onFilterChange} = this.props;
    this.setState({
      filterModel: params.filterModel
    });
    if(onFilterChange){
      onFilterChange()
    }
  }

  _onSortChange = (params) => {
    let {onSortChange} = this.props;
    this.setState({
      sortModel: params.sortModel
    });
    if(onSortChange){
      onSortChange();
    }
  }

  _GetSelectedRows = (includeDocs = false) => {
    let {data, rowIdAccessor} = this.props;
    let {selectedRows} = this.state;
    if(includeDocs){
      return _.filter(data, o => selectedRows.includes(Accessor.Get(o, rowIdAccessor)));
    }
    return selectedRows;
  }

  _onPageChange = (param) => {
    let {onPageChange} = this.props;
    if(onPageChange){
      onPageChange(param.page);
    }
  }

  _onPageSizeChange = (param) => {
    console.log(param)
    let {onPageSizeChange} = this.props;
    if(onPageSizeChange){
      onPageSizeChange(param.pageSize);
    }
  }

  _defaultButtons = (buttons) => {
    let {auth, level, rowIdAccessor} = this.props;
    let btns = [];
    _.map(buttons, (o, i) => {
      if(Authority.IsAccessible(auth, level, o.reqAuth, o.reqLevel, o.reqFunc)){
        btns.push({
          headerName: "",
          renderHeader: () => <div/>,
          field: "<Button> " + o.caption,
          sortable: false,
          filterable: false,
          disableColumnMenu: true,
          disableClickEventBubbling: true,
          alignment: "center",
          width: 50,
          renderCell: (param) => {
            return (
              <HStack>              
                <StyledIconButton theme={o.theme || {label: ColorX.GetColorCSS("pureDark", 0.54)}} 
                  disabled={o.disableFunc && o.disableFunc(Accessor.Get(param.row, rowIdAccessor), param.row)} 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    if(o.func){
                      o.func(Accessor.Get(param.row, rowIdAccessor), param.row);
                    }else{
                      store && store.Alert("Function is not implemented.", "warn");  
                    }
                  }}>
                  <Tooltip title={o.caption} arrow={true} placement="top">
                    {o.icon}
                  </Tooltip>
                </StyledIconButton>
              </HStack>
            );
          }
        });
      }
    });

    return btns;
  }

  getColumns = () => {
    let {auth, level, schema, addOns, inlineButtons, inlineButtonsOpposite, inlineButtonsAlign, selectionOnClick} = this.props;
    let cols = _.map(schema, (o, i) => {
      if(Authority.IsAccessible(auth, level, o.reqAuth, o.reqLevel, o.reqFunc)){

        let renderCell;

        if(!o.Cell && o.transform === "datetime"){
          o.transform = undefined;
          o.Cell = (row, field, addOns) => {
            if(field){
              return moment(field).format(o.dateFormat || "DD MMM YYYY, HH:mm:ss");
            }else{
              return o.fallback || "N/A"
            }
          }
        }

        if(o.Cell){
          renderCell = (param) => o.Cell(param.row, Accessor.Get(param.row, o.name), addOns);
        }else{
          renderCell = (param) => <CellExpand value={param.value} width={param.colDef.width}/>
        }

        let renderHeader = undefined;
        let headerName = undefined;
        if(_.isString(o.label)){
          headerName = o.label;
        }else{
          renderHeader = () => o.label
        }

        let cellClassName = undefined;
        if(_.isFunction(o.cellClass)){
          cellClassName = (param) => o.cellClass(param.row, Accessor.Get(param.row, o.name), addOns);
        }else if(_.isString(o.cellClass)){
          cellClassName = o.cellClass;
        }

        let sortComparator = undefined;
        if(o.sortComparator){
          sortComparator = (v1, v2, param1, param2) => {
            return o.sortComparator(param1.row, param2.row, Accessor.Get(param1.row, o.name), Accessor.Get(param2.row, o.name));
          };
        }

        let valueGetter = (param) => {
          return Accessor.Get(param.row, o.name)
        };

        if(o.valueGetter){
          valueGetter = (param) => {
            return o.valueGetter(param.row, Accessor.Get(param.row, o.name), addOns);
          };
        }

        let rtn = {
          headerName: headerName,
          renderHeader: renderHeader,
          headerAlign: o.headerAlign || "center",
          headerClassName: o.headerClass,
          field: o.name,
          width: o.width,
          flex: o.width? undefined : (o.flex || 1),
          valueGetter: valueGetter,
          sortable: o.sortable !== false,
          filterable: o.filterable || false,
          disableColumnMenu: !(o.menu || false),
          type: o.type,
          renderCell: renderCell,
          cellClassName: cellClassName,
          description: o.description,
          autoHeight: o.autoHeight || false,
          disableClickEventBubbling: !selectionOnClick,
          hide: o.hide
        };

        if(o.sortComparator) rtn.sortComparator = sortComparator;
        return rtn;
      }
    });
    cols = _.filter(cols, o => o);

    //Inline Buttons
    let btns = this._defaultButtons(inlineButtons);
    
    //Opposite Inline Buttons
    let oppositeBtns = this._defaultButtons(inlineButtonsOpposite);

    let rtn = [];

    if(inlineButtonsAlign === "left"){
      rtn = [
        ...btns,
        ...cols,
        ...oppositeBtns
      ];
    }else{
      rtn = [
        ...oppositeBtns,
        ...cols,
        ...btns
      ];
    }

    return rtn;
  }

  getSortModel = () => {
    let {auth, level, schema} = this.props;
    let sortModel = _.map(schema, (o, i) => {
      if(Authority.IsAccessible(auth, level, o.reqAuth, o.reqLevel, o.reqFunc)){
        if(o.defaultSort){
          return {
            field: o.name,
            sort: o.defaultSort
          }
        }
      }
    });
    sortModel = _.filter(sortModel, o => o);
    return sortModel;
    
  }

  CustomToolbar = () => {
    let {columnsToolbar, filterToolbar, densityToolbar, exportToolbar} = this.props;
    return (
      <GridToolbarContainer>
        {columnsToolbar && <GridColumnsToolbarButton />}
        {filterToolbar && <GridFilterToolbarButton />}
        {densityToolbar && <GridDensitySelector />}
        {exportToolbar && <GridToolbarExport />}
      </GridToolbarContainer>
    );
  }

  GridLoadingOverlay = () => {
    return (
      <GridOverlay>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <StyledLinearProgress theme={{bar: ColorX.GetColorCSS("elainOrange"), background: ColorX.GetColorCSS("elainOrangeDark")}}/>
        </div>
      </GridOverlay>
    );
  }

  GridNoRowsOverlay = () => {
    return (
      <GridOverlay>
        <VStack>
          <Spacer/>
          <Box width="250px">
            <img src="/Images/data-not-found.svg" alt="nodata"/>
          </Box>
          <Typography>
            Data not found
          </Typography>
          <Spacer/>
        </VStack> 
      </GridOverlay>
    );
  }

  render(){
    let {height, width, data, showSelector, rowIdAccessor, 
      pagination, defaultPageSize, pageSizeOption, loading, 
      rowCount, serverSidePagination, density} = this.props;
      let {sortModel, filterModel, selectedRows} = this.state;
    return (
      <Box height={height} width={width} overflow={"hidden"}>
        <DataGrid rows={data} 
          columns={this.getColumns()}
          checkboxSelection={showSelector}
          onSelectionModelChange={this._onRowSelected}
          onFilterModelChange={this._onFilterChange}
          onSortModelChange={this._onSortChange}
          getRowId={(o) => Accessor.Get(o, rowIdAccessor)}
          pageSize={defaultPageSize}
          rowsPerPageOptions={pageSizeOption}
          pagination={pagination}
          loading={loading}
          components={{
            Toolbar: this.CustomToolbar,
            LoadingOverlay: this.GridLoadingOverlay,
            NoRowsOverlay: this.GridNoRowsOverlay
          }}
          paginationMode={serverSidePagination? "server": "client"}
          onPageChange={this._onPageChange}
          onPageSizeChange={this._onPageSizeChange}
          rowCount={rowCount}
          density={density}
          selectionModel={selectedRows || []}
          sortModel={sortModel || this.getSortModel()}
          filterModel={filterModel}
          disableColumnReorder={true}
          />
      </Box>
    );
  }

}

export default Tablizo;
