import dayjs from 'dayjs'

export default [
  {
    title: 'All Time',
    value: ''
  },
  {
    title: 'Today',
    value: dayjs().subtract(1, 'days').toISOString()
  },
  {
    title: 'This Week',
    value: dayjs().subtract(7, 'days').toISOString()
  },
  {
    title: 'This Month',
    value: dayjs().subtract(30, 'days').toISOString()
  },
  {
    title: 'This Year',
    value: dayjs().subtract(365, 'days').toISOString()
  }
]
