
import PropTypes from '../_util/vue-types'
import { hasProp, getComponentFromProp } from '../_util/props-util'

export default {
  name: 'VBreadcrumbItem',
  __ANT_BREADCRUMB_ITEM: true,
  props: {
    prefixCls: PropTypes.string.def('vcu-breadcrumb'),
    href: PropTypes.string,
    separator: PropTypes.any,
  },
  render () {
    const { prefixCls, $slots } = this
    const children = $slots.default
    let link
    if (hasProp(this, 'href')) {
      link = <a class={`${prefixCls}-link`}>{children}</a>
    } else {
      link = <span class={`${prefixCls}-link`}>{children}</span>
    }
    if (children) {
      return (
        <span>
          {link}
          <span class={`${prefixCls}-separator`}>{getComponentFromProp(this, 'separator') || '/'}</span>
        </span>
      )
    }
    return null
  },
}

