import React from 'react'
import RehypeReact from 'rehype-react'
import Header from '../components/Header'
 
export const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { header: Header }
}).Compiler
