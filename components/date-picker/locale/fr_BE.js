import CalendarLocale from '../../vc-calendar/src/locale/fr_BE'
import TimePickerLocale from '../../time-picker/locale/fr_BE'

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Sélectionner une date',
    rangePlaceholder: [
      'Date de début', 'Date de fin',
    ],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
}

// All settings at: //424

export default locale