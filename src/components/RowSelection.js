import React, { useMemo } from 'react'
import { useTable, useRowSelect,useGlobalFilter } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import { Checkbox } from './Checkbox'
import {Container,Row} from "react-bootstrap";
import {Glofit } from './Glofit';

export const RowSelection = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
    // selectedFlatRows
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
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
    }
  )

  const firstPageRows = rows.slice(0, 20)
  const { globalFilter} = state

  return (
    <>
    <section className='rowselection'>
    <Container>
    <Row>
    <Glofit filterr = {globalFilter} setFilterr={setGlobalFilter}/>
    <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {firstPageRows.map(row => {
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
  </Row>
  </Container>
  </section>
     </>
    )
  }


  // extra code
//   <pre>
//   <code>
//     {JSON.stringify(
//       {
//         selectedFlatRows: selectedFlatRows.map(row => row.original)
//       },
//       null,
//       2
//     )}
//   </code>
// </pre>

