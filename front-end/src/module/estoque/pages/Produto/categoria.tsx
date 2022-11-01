import React from 'react';
import { FaSave } from 'react-icons/fa';
import { ButtonBase, ButtonIcon, InputDefault, ModalDefault } from '../../../../components';

// import { Container } from './styles';
interface ModalProps {
    showModal: boolean;
    closeModal: () => void;
}

const ModalCategoria: React.FC<ModalProps> = (props) => {
    return <ModalDefault key={"modal-categoria"}
        title={'FICHA DE CATEGORIA'}
        isOpen={props.showModal}
        onRequestClose={props.closeModal}
        width='35%'
        height='50%'
        left='26%'
        margin='8%'
    >
        <div className='p-2'>
            <InputDefault className='w-11/12 mb-5' label='Nome' type='text' />
            <div className='flex'>
                <InputDefault className='w-3-12 mr-9' label='NCM' type='number' />
                <InputDefault className='w-3-12' label='CEST' type='number' />
            </div>
        </div>

        <footer className=''>
            <div className="flex justify-end" style={{ bottom: 25, right: 15, position: 'absolute' }}>
                <ButtonBase label="CANCELAR" model="btn_line" className="primary-color mr-5  w-32" size="large" onClick={props.closeModal} />
                <ButtonIcon  className="mr-3" label="SALVAR" icon={<FaSave />} width={'50%'} />
            </div>
        </footer>

    </ModalDefault>


}

export default ModalCategoria;