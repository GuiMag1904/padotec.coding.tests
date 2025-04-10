import { useEffect, useState } from 'react'
import data from './data/data.json'
import './App.css'

function App() {
  const [filtro, setFiltro] = useState('usuario');
  const [buscaTexto, setBuscaTexto] = useState('');
  const [busca, setBusca] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const ordenados = [...data].sort((a, b) => b.payload.logId - a.payload.logId);
      setLogs(ordenados);
    } else {
      console.error('data.json não é um array!', data);
      setLogs([]);
    }
  }, []);

  const placeholder = filtro === 'usuario' ? 'Buscar por nome ou userId' : 'Buscar por mac ou lockId';

  const logsFiltrados = logs.filter((log) => {
    if (!busca) return true;

    if (filtro === 'usuario') {
      return (
        log.payload.userName?.toLowerCase().includes(busca.toLowerCase()) ||
        log.payload.userId?.toLowerCase().includes(busca.toLowerCase())
      );
    } else {
      return (
        log.mac?.toLowerCase().includes(busca.toLowerCase()) ||
        log.lockId?.toLowerCase().includes(busca.toLowerCase())
      );
    }
  });

  return (
    <div className="container">
      <h1 className="titulo">Logs de Acesso</h1>
      <div className='div1' >
        <div className='opcoes'>
          <p>Visualizar por:</p>
          <select
            value={filtro}
            onChange={(e) => {
              setFiltro(e.target.value),
              setBusca(''),
              setBuscaTexto('')
            }}
          >
            <option value="usuario">Usuário</option>
            <option value="dispositivo">Dispositivo</option>
          </select>
          <input
            type="text"
            id="pesquisa"
            placeholder={placeholder}
            value={buscaTexto}
            onChange={(e) => setBuscaTexto(e.target.value)}
            />
          <button className='botao' id='filtrar' onClick={() => setBusca(buscaTexto)}>Filtrar</button>
          <button className='botao' id='limpar' onClick={() => {
            setBuscaTexto('');
            setBusca('');
          }}>Limpar</button>
        </div>

        <table>
          <thead>
            <tr>
              <th className='tabelaTitulo'><strong>{filtro === 'usuario' ? 'Usuário' : 'Dispositivo'}</strong></th>
              <th className='tabelaTitulo'><strong>Log</strong></th>
              <th className='tabelaTitulo'><strong>Data</strong></th>
            </tr>
          </thead>
          <tbody>
            {logsFiltrados.map((log) => {
              const nome = log.payload.userName;
              const dataFormatada = new Date(log.payload.timestamp).toLocaleString();
              const metodo = log.payload.method === 3 ? 'Cartão RFID' : 'Aplicativo';
              const acao = log.payload.type === 1 ? 'abriu' : 'trancou';
              const logTexto = `${nome} ${acao} essa porta às ${dataFormatada} por ${metodo}`;

              return (
                <tr key={log.payload.logId}>
                  <td>{filtro === 'usuario' ? log.payload.userId : log.lockId}</td>
                  <td>{logTexto}</td>
                  <td>{dataFormatada}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;