import { format } from 'date-fns'

export const COLUMNSTWO = [
    {
      Header: 'Id',
      Footer: 'Id',
      accessor: 'id',
      disableFilters: true,
      sticky: 'left'
    },
    {
      Header: 'first name',
      Footer: 'first name',
      accessor: 'first_name',
      sticky: 'left'
    },
    {
      Header: 'last name',
      Footer: 'last name',
      accessor: 'last_name',
      sticky: 'left'
    },
    {
      Header: 'date of Birth',
      Footer: 'date of Birth',
      accessor: 'date_of_birth',
      Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyyy')
      }
    },
    {
      Header: 'Country',
      Footer: 'Country',
      accessor: 'country'
    },
    {
      Header: 'Phone',
      Footer: 'Phone',
      accessor: 'phone'
    },
    {
      Header: 'Email',
      Footer: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Age',
      Footer: 'Age',
      accessor: 'age'
    },
   
  ]