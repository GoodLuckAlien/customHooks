/* eslint-disable react-hooks/exhaustive-deps */
import {
    useState,
    useMemo,
    useEffect,
    useRef
  } from 'react'
  
  /* table 数据更新 hooks */
export default function useTableRequset(query, api) {
    /* 是否是第一次请求 */
    const fisrtRequest = useRef(false)
    /* 保存分页信息 */
    const [pageOptions, setPageOptions] = useState({
      page: 1,
      pageSize: 3
    })
    /* 保存表格数据 */
    const [tableData, setTableData] = useState({
      list: [],
      totalCount: 0,
      pageSize: 3,
      page:1,
    })
    /* 请求数据 ,数据处理逻辑根后端协调着来 */
    const getList = useMemo(() => {
      return async payload => {
        if (!api) return
        const data = await api(payload || {...query, ...pageOptions})
        if (data.code == 0) {
          setTableData(data.data)
          fisrtRequest.current = true
        } 
      }
    }, [])
    /* 改变分页，重新请求数据 */
    useEffect(() => {
      fisrtRequest.current && getList({
        ...query,
        ...pageOptions
      })
    }, [pageOptions])
    /* 改变查询条件。重新请求数据 */
    useEffect(() => {
      getList({
        ...query,
        ...pageOptions,
        page: 1
      })
    }, [query])
    /* 处理分页逻辑 */
    const handerChange = useMemo(() => (options) => setPageOptions({...options }), [])
  
    return [tableData, handerChange, getList]
  }
  