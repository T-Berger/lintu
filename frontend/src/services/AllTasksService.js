import Api from '@/services/Api'

export default {
  init () {
    return Api().get('alltasks/')
  }
}
