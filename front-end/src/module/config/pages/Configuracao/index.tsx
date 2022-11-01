import { useContext } from "react";
import { FaRegSun, FaSave } from "react-icons/fa";
import { ThemeContext } from 'styled-components';
import { ButtonBase, ButtonIcon, Divider, InputDefault, InputMask, InputNumber, InputSelectDefault, TabsDefault } from "../../../../components";
import { Container } from './styles';
import { controleCaixa, controleCasaDecimais } from './__mocks__';
import tipos from '../../../../helpers/help_lista_uf.json';

/**
*@Author
*@Issue
*/

function Configuracao() {
  const { colors, title } = useContext(ThemeContext);

  const onOptionTabs = (tab: string) => {
    if (tab === 'tab1') {
      return <div className="w-full p-2">
        <div className='mr-10 w-2/12 mb-5'>
          <InputNumber className='font-bold' label='% Limite de desconto' prefixo='' casaDecimal={2} separadorMilhar='.' separadorDecimal=',' fixedZeroFinal placeholder='00,00' />
        </div>
        <div className="flex items-center mb-5">
          <div className='w-2/12 mr-10'>
            <InputSelectDefault label='Quantidade de casas decimais do estoque' placeholder="Selecione a casa decimal" options={controleCasaDecimais} defaultValue={controleCasaDecimais[0]} />
          </div>
          <div className='w-2/12 mr-10'>
            <InputSelectDefault label='Usar controle caixa?' placeholder="Selecione..." options={controleCaixa} defaultValue={controleCaixa[0]} />
          </div>
          <div className='w-2/12 mr-5'>
            <InputDefault label='Número do caixa?' type="number" readOnly />
          </div>
        </div>
        <div className='w-2/12 mr-10'>
          <InputSelectDefault label='Liberação por Gerente?' placeholder="Selecione a casa decimal" options={controleCaixa} defaultValue={controleCaixa[0]} />
        </div>
      </div>
    }
    else {
      return <div className="w-full">
        <div className="flex mb-5">
          <InputMask className="mr-10" label="CPF" mask={'999.999.999-99'} />
          <InputMask className="mr-10" label="CNPJ" mask={'99.999.999/9999-99'} />
          <InputDefault label="CRC" type="text" />
        </div>
        <div className="flex mb-5">
          <InputDefault className="w-4/12 mr-10" label="Razão social" type="text" />
          <InputDefault className="w-5/12" label="Nome fantasia" type="text" />
        </div>
        <div id='endereco' className="mb-5">
          <div className="flex mb-4">
            <InputMask className="w-2/12 mr-5" label="CEP" mask={'99999-999'}></InputMask>
            <InputDefault className="w-6/12 mr-5" label="Lagradouro" type="text" />
            <InputDefault className="w-1/12 mr-5" label="Número" type="text" />
          </div>
          <div className="flex">
            <InputMask className="w-3/12 mr-5" label="Bairro" mask={'99999-999'}></InputMask>
            <InputDefault className="w-3/12 mr-5" label="Cidade" type="text" />
            <div className="w-3/12" >
              <InputSelectDefault label="UF" options={tipos.estados} placeholder='Selecione o estado...' />
            </div>
          </div>
        </div>

        <div id='contato'>
          <div className="flex">
            <InputMask className="w-2/12 mr-5" label="Telefone" mask={'(83)9.9999-9999'}></InputMask>
            <InputDefault className="w-4/12 mr-5" label="E-mail" type="email" />
          </div>
        </div>
      </div>
    }

  };

  return <Container className="card-local h-full w-full p-5">
    <header className="flex text-xl font-bold items-center justify-between mb-1 h-6" style={{ color: colors.primary }}>
      <div className="flex items-center justify-between" style={{ backgroundColor: (title === 'dark' ? colors.tertiary : colors.white), borderRadius: '8px' }}>
        <i className="mr-1"><FaRegSun /></i>
        <label htmlFor="">Configurações</label>
      </div>
    </header>
    <Divider tipo="horizontal" className="mb-2" />
    <TabsDefault tabs={[{ value: 'tab1', label: 'Sistema' }, { value: 'tab2', label: 'Dados contador' }]}
      onSelectTab={onOptionTabs}
      className='w-6/12 text-center'
    />
    <footer className=''>
      <div className="flex justify-end" style={{ bottom: 25, right: 25, position: 'absolute' }}>
        <ButtonIcon className="mr-3" label="SALVAR" icon={<FaSave />} width={'100%'} />
      </div>
    </footer>
  </Container>;
}
export default Configuracao;