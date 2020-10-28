import {
    useRef,
    useState,
    useMemo
  } from 'react'
  
  /* 表单/表头搜素hooks */
  function useFormChange() {
    const formData = useRef({})
    const [, forceUpdate] = useState(null)
    /* 改变表单单元项 */
    const setFormItem = (keys, value) => {
      const form = formData.current
      form[keys] = value
      forceUpdate(value)
    }
    /* 重置表单 */
    const reset = useMemo(() => {
      return function() {
        const current = formData.current
        for (let name in current) {
          current[name] = ''
        }
        forceUpdate('')
      }
    }, [])
    return [ formData.current , setFormItem, reset ]
  }
  
  export default useFormChange
  