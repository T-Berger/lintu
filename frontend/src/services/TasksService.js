import Api from '@/services/Api'
export default {
  init () {
    return Api().get('tasks/task', {
      // aufgabennummer: ''
    })
  },
  index (id) {
    console.log('tasks/task/' + id)
    return Api().get('tasks/task/' + id, {
      aufgabennummer: id
    })
  }
}
