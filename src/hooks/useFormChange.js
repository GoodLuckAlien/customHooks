import {
    useRef,
    useState,
    useMemo
  } from 'react'
  
  /* 表单/表头搜素hooks */
  function useFormChange() {
    const formData = useRef({})
    const [, forceUpdate] = useState(null)
    const handerForm = useMemo(()=>{
      /* 改变表单单元项 */
      const setFormItem = (keys, value) => {
        const form = formData.current
        form[keys] = value
        forceUpdate(value)
      }
          /* 重置表单 */
      const resetForm = () => {
        const current = formData.current
        for (let name in current) {
          current[name] = ''
        }
        forceUpdate('')
      }
      return [ setFormItem ,resetForm ]
    },[])
  
    return [ formData.current ,...handerForm ]
  }
  
  export default useFormChange
  