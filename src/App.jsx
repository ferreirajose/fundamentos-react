import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default function (_) {
  return (
    <div id="app">
      <h1>Fundamentos</h1>
      <Fragmento />
      <Aleatorio min={1} max={10} />
      <Primeiro />
      <ComParametro titulo="test" subTitulo="subTitulo" />
    </div>
  );
}
