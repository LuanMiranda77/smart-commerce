import React, { useContext, useEffect, useState } from "react"
import { FaCreditCard, FaDollarSign, FaFunnelDollar, FaIdCard, FaMoneyCheckAlt } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { BarraChart, ButtonIcon, InputDate, LinhaChart, PizzaChart, SummaryCustom, SummaryDefault } from "../../../../components";
import CountUp from 'react-countup';

import { Container } from './styles';

/**
*@Author
*@Issue
*/

function Dashboard() {
      const theme = useContext(ThemeContext);

      const cardFaturamentoTotal=(
            <div>teste</div>
      );

      const cardProdutoMaisVendido=(
            <div>teste</div>
      );

      const cardFaturamentoMes=(
            <LinhaChart label="teste" data={[]}/>
      );

      const cardFaturamentoAno=(
            <BarraChart label="teste" data={[]}/>
      );

      

      const cardPizza = (
            <>
                  {/* <div className="w-full h-12">
            <p >Gráfico das vendas</p>
            </div> */}
                  <PizzaChart label="Gráfico das vendas" data={[{
                        name: 'teste',
                        value: 'teste',
                        percent: 12,
                        color: 'red',
                  },
                  {
                        name: 'teste',
                        value: 'teste',
                        percent: 88,
                        color: 'blue',
                  },
                  {
                        name: 'teste',
                        value: 'teste',
                        percent: 88,
                        color: 'green',
                  },
                  {
                        name: 'teste',
                        value: 'teste',
                        percent: 88,
                        color: 'orange',
                  },
                  ]} />
            </>

      );

      return <Container>
            <div className="grid grid-cols-12 gap-1 lg:grid-cols-12 gap-2" style={{ backgroundColor: theme.colors.white, borderRadius:'8px' }}>
                  <div className="col-start-1 col-end-13 col-span-2 p-3">
                        <div className="w-full lg:flex lg:justify-end" >
                              <InputDate className="mr-5 w-40" label="Data inicio" />
                              <InputDate className="mr-5 w-40" label="Data final" />
                              <div className="w-32 flex items-center mt-6">
                                    <ButtonIcon className="" icon={<FaFunnelDollar />} label="FILTRO" size="large" />
                              </div>
                        </div>
                        <br />
                        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 gap-2" >
                              <SummaryDefault label="Dinheiro" montante={180} icon={<FaDollarSign style={{ fontSize: '30px', color: theme.colors.success }} />} colorBorder={theme.colors.success} />
                              <SummaryDefault label="Cartão Crédito"  montante={180} icon={<FaCreditCard style={{ fontSize: '30px', color: theme.colors.warning }} />} colorBorder={theme.colors.warning} />
                              <SummaryDefault label="Cartão Débito"  montante={180} icon={<FaMoneyCheckAlt style={{ fontSize: '30px', color: theme.colors.info }}/>} colorBorder={theme.colors.info} />
                              <SummaryDefault label="Vale"  montante={180} icon={<FaIdCard style={{ fontSize: '30px', color: theme.colors.error }} />} colorBorder={theme.colors.error} />
                        </div>
                        <br />
                        <div className="w-100 grid grid-cols-1 gap-2 lg:grid-cols-4 gap-2 h-72">
                              <SummaryCustom className='lg:col-start-1 lg:col-span-2 ' id="total-dinheiro" children={cardFaturamentoTotal} colorBorder={theme.colors.primary} />
                              <SummaryCustom id="total-dinheiro" children={cardProdutoMaisVendido} colorBorder={theme.colors.primary} />
                              <SummaryCustom id="total-dinheiro" children={cardPizza} colorBorder={theme.colors.primary} />
                        </div>
                        <br />
                        <div className="w-100 grid grid-cols-1 gap-2 lg:grid-cols-2 gap-2 h-40">
                              <SummaryCustom id="total-dinheiro" children={cardFaturamentoMes} colorBorder={theme.colors.primary} />
                              <SummaryCustom id="total-dinheiro" children={cardFaturamentoAno} colorBorder={theme.colors.primary} />
                        </div>
                        <br />
                  </div>
            </div>

      </Container>;
}
export default Dashboard;