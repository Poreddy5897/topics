import React,{ lazy,Suspense }  from 'react';

const LazyLoading =lazy(()=>import('./LazyLoading'));


const Hoc = () => {
  return (
    <div>
    <h1>Hoc</h1>
    <Suspense fallback={<h1>hello i am loading</h1>}>
  <LazyLoading/>
  </Suspense>
    </div>
  )
}

export default Hoc