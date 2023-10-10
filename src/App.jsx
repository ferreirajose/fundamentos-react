import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';

export default function (_) {
  return (
    <div id="app">
      <h1>Fundamentos</h1>
      <Fragmento />
      <Primeiro />
      <ComParametro titulo="test" subTitulo="subTitulo" />
    </div>
  );
}
