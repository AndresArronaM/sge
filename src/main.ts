import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faKey, faLock, faRightToBracket, faBan } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App  from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'

import '@/assets/scss/style.scss'

const pinia = createPinia()
const app = createApp(App)
const configPrimevue = {
  ripple: true,
  unstyled: false,
  inputStyle: "filled",
  csp: {
    nonce: '...'
  },
  locale: {
    startsWith: 'Starts with',
    contains: 'Contains',
    notContains: 'Not contains',
    endsWith: 'Ends with',
    equals: 'Equals',
    notEquals: 'Not equals',
    noFilter: 'No Filter',
    lt: 'Less than',
    lte: 'Less than or equal to',
    gt: 'Greater than',
    gte: 'Greater than or equal to',
    dateIs: 'Date is',
    dateIsNot: 'Date is not',
    dateBefore: 'Date is before',
    dateAfter: 'Date is after',
    clear: 'Clear',
    apply: 'Apply',
    matchAll: 'Match All',
    matchAny: 'Match Any',
    addRule: 'Add Rule',
    removeRule: 'Remove Rule',
    accept: 'Aceptar',
    reject: 'Rechazar',
    choose: 'Choose',
    upload: 'Upload',
    cancel: 'Cancel',
    completed: 'Completed',
    pending: 'Pending',
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado'
    ],
    dayNamesShort: [
      'Dom',
      'Lun',
      'Mar',
      'Mie',
      'Jue',
      'Vie',
      'Sab'
    ],
    dayNamesMin: [
      'D',
      'L',
      'M',
      'M',
      'J',
      'V',
      'S'
    ],
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
    monthNamesShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic'
    ],
    chooseYear: 'Choose Year',
    chooseMonth: 'Choose Month',
    chooseDate: 'Choose Date',
    prevDecade: 'Previous Decade',
    nextDecade: 'Next Decade',
    prevYear: 'Previous Year',
    nextYear: 'Next Year',
    prevMonth: 'Previous Month',
    nextMonth: 'Next Month',
    prevHour: 'Previous Hour',
    nextHour: 'Next Hour',
    prevMinute: 'Previous Minute',
    nextMinute: 'Next Minute',
    prevSecond: 'Previous Second',
    nextSecond: 'Next Second',
    am: 'am',
    pm: 'pm',
    today: 'Hoy',
    weekHeader: 'Sm',
    firstDayOfWeek: 0,
    dateFormat: 'yy-mm-dd',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    passwordPrompt: 'Elige una contraseña',
    emptyFilterMessage: 'No results found',
    searchMessage: '{0} results are available',
    selectionMessage: '{0} items selected',
    emptySelectionMessage: 'No selected item',
    emptySearchMessage: 'No results found',
    emptyMessage: 'No available options',
    aria: {
      trueLabel: 'True',
      falseLabel: 'False',
      nullLabel: 'Not Selected',
      star: '1 star',
      stars: '{star} stars',
      selectAll: 'All items selected',
      unselectAll: 'All items unselected',
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      navigation: 'Navigation',
      scrollTop: 'Scroll Top',
      moveTop: 'Move Top',
      moveUp: 'Move Up',
      moveDown: 'Move Down',
      moveBottom: 'Move Bottom',
      moveToTarget: 'Move to Target',
      moveToSource: 'Move to Source',
      moveAllToTarget: 'Move All to Target',
      moveAllToSource: 'Move All to Source',
      pageLabel: '{page}',
      firstPageLabel: 'First Page',
      lastPageLabel: 'Last Page',
      nextPageLabel: 'Next Page',
      prevPageLabel: 'Previous Page',
      rowsPerPageLabel: 'Rows per page',
      jumpToPageDropdownLabel: 'Jump to Page Dropdown',
      jumpToPageInputLabel: 'Jump to Page Input',
      selectRow: 'Row Selected',
      unselectRow: 'Row Unselected',
      expandRow: 'Row Expanded',
      collapseRow: 'Row Collapsed',
      showFilterMenu: 'Show Filter Menu',
      hideFilterMenu: 'Hide Filter Menu',
      filterOperator: 'Filter Operator',
      filterConstraint: 'Filter Constraint',
      editRow: 'Row Edit',
      saveEdit: 'Save Edit',
      cancelEdit: 'Cancel Edit',
      listView: 'List View',
      gridView: 'Grid View',
      slide: 'Slide',
      slideNumber: '{slideNumber}',
      zoomImage: 'Zoom Image',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      rotateRight: 'Rotate Right',
      rotateLeft: 'Rotate Left'
    }
  }
}

app.use(router)
app.use(pinia)
app.use(PrimeVue, configPrimevue)
library.add(faUser, faKey, faLock, faRightToBracket, faBan)
app.component('FontAwesomeIcon',FontAwesomeIcon)
app.mount('#app')
