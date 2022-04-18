import React, { useMemo } from 'react';
import {Accordion} from 'react-bootstrap'
import { useTable,usePagination,useRowSelect, useGlobalFilter, useSortBy} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'
import MOCK_DATA_TWO from './MOCK_DATA_TWO.json'
import { COLUMNS } from './columns'
import { COLUMNSTWO } from './columnstwo'
import './table.css'
import {Container,Row} from "react-bootstrap";
import {GlobalFilter} from './GlobalFilter'
import { Checkbox } from './Checkbox'

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const columnstwo = useMemo(() => COLUMNSTWO, [])
  const data = useMemo(() => MOCK_DATA, [])
  const datatwo = useMemo(() => MOCK_DATA_TWO,[])

  const {
    
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      datatwo,
      columnstwo,
      initialState: { pageIndex: 0 }
    },
    // useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ])
    },
  )

  
  const {pageIndex,pageSize,globalFilter} = state;
  
  return (
    <div>
   
    <GlobalFilter  filter = {globalFilter} setFilter={setGlobalFilter}/>
    <Accordion>
    <Accordion.Item eventKey="0">
    <Accordion.Header>Administrators</Accordion.Header>
    <Accordion.Body>
    <section className='Pagination'>
    <Container>
    <Row>
    <GlobalFilter  filter = {globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
    <thead>               
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
            
            <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                
            </th>
          ))}
        </tr>
       ))}
     
    </thead>
    <tbody {...getTableBodyProps()}>
      {page.map(row => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
 
  <div>
    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {'<<'}
    </button>{' '}
    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
      Previous
    </button>{' '}
    <button onClick={() => nextPage()} disabled={!canNextPage}>
      Next
    </button>{' '}
    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {'>>'}
    </button>{' '}
    <span>
      Page{' '}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>{' '}
    </span>
    <span>
      | Go to page:{' '}
      <input
        type='number'
        defaultValue={pageIndex + 1}
        onChange={e => {
          const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
          gotoPage(pageNumber)
        }}
        style={{ width: '50px' }}
      />
    </span>{' '}
    <select
      value={pageSize}
      onChange={e => setPageSize(Number(e.target.value))}>
      {[10, 25, 50].map(pageSize => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </select>
  </div>
    </Row>
    </Container>
  
    </section>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Survey Creators</Accordion.Header>
    <Accordion.Body>
    <section className='Pagination'>
    <Container>
    <Row>
    <GlobalFilter  filter = {globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
            <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                 
            </th>
          ))}
        </tr>
      ))}
    </thead>
   
    <tbody {...getTableBodyProps()}>
      {page.map(row => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
 
  <div>
    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {'<<'}
    </button>{' '}
    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
      Previous
    </button>{' '}
    <button onClick={() => nextPage()} disabled={!canNextPage}>
      Next
    </button>{' '}
    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {'>>'}
    </button>{' '}
    <span>
      Page{' '}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>{' '}
    </span>
    <span>
      | Go to page:{' '}
      <input
        type='number'
        defaultValue={pageIndex + 1}
        onChange={e => {
          const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
          gotoPage(pageNumber)
        }}
        style={{ width: '50px' }}
      />
    </span>{' '}
    <select
      value={pageSize}
      onChange={e => setPageSize(Number(e.target.value))}>
      {[10, 25, 50].map(pageSize => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </select>
  </div>
    </Row>
    </Container>
  
    </section>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
  <Accordion.Header>Individuals</Accordion.Header>
  <Accordion.Body>
  <section className='Pagination'>
  <Container>
  <Row>
  <GlobalFilter  filter = {globalFilter} setFilter={setGlobalFilter}/>
  <table {...getTableProps()}>
  <thead>
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
          <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
               
          </th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody {...getTableBodyProps()}>
    {page.map(row => {
      prepareRow(row)
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map(cell => {
            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
          })}
        </tr>
      )
    })}
  </tbody>
</table>

<div>
  <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
    {'<<'}
  </button>{' '}
  <button onClick={() => previousPage()} disabled={!canPreviousPage}>
    Previous
  </button>{' '}
  <button onClick={() => nextPage()} disabled={!canNextPage}>
    Next
  </button>{' '}
  <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
    {'>>'}
  </button>{' '}
  <span>
    Page{' '}
    <strong>
      {pageIndex + 1} of {pageOptions.length}
    </strong>{' '}
  </span>
  <span>
    | Go to page:{' '}
    <input
      type='number'
      defaultValue={pageIndex + 1}
      onChange={e => {
        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
        gotoPage(pageNumber)
      }}
      style={{ width: '50px' }}
    />
  </span>{' '}
  <select
    value={pageSize}
    onChange={e => setPageSize(Number(e.target.value))}>
    {[10, 25, 50].map(pageSize => (
      <option key={pageSize} value={pageSize}>
        Show {pageSize}
      </option>
    ))}
  </select>
</div>
  </Row>
  </Container>

  </section>
  </Accordion.Body>
</Accordion.Item>
</Accordion>
</div>
  )
}



