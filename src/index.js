import React from 'react';
import ReactDOM from 'react-dom';
import { ProductList, products } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProductList products={products} />, document.getElementById('root'));

registerServiceWorker();
