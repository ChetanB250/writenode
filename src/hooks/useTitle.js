import { useEffect } from 'react'

const useTitle = (title) => {
    useEffect(()=> {
        document.title = `${title} - WriteNode`
    }, [title])
  return null
}

export default useTitle
