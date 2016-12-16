import moment from 'moment'

export default [
  {
    title: 'All Time',
    value: ''
  },
  {
    title: 'Today',
    value: moment().subtract(1, 'days').toISOString()
  },
  {
    title: 'This Week',
    value: moment().subtract(7, 'days').toISOString()
  },
  {
    title: 'This Month',
    value: moment().subtract(30, 'days').toISOString()
  },
  {
    title: 'This Year',
    value: moment().subtract(365, 'days').toISOString()
  }
]
