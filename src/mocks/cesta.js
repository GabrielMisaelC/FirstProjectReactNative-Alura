import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import abobora from '../../assets/frutas/Abobora.png';
import batata from '../../assets/frutas/Batata.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import pepino from '../../assets/frutas/Pepino.png';

const cesta = {
    top: {
        title: 'Detalhes da Cesta',
    },
    detalhes: {
        name: 'Cesta De Verduras',
        nameFazenda: 'Jenny Jack Farm',
        imageLogo: logo,
        describe: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.',
        price: 'R$ 40,00',
        titleButton: 'Comprar',
    },
    itens: {
        title: 'Itens da Cesta',
        lista: [
            {
                nome: 'Tomate',
                image: tomate,
            },
            {
                nome: 'Brocolis',
                image: brocolis,
            },
            {
                nome: 'Batata',
                image: batata,
            },
            {
                nome: 'Pepino',
                image: pepino,
            },
            {
                nome: 'Abobora',
                image: abobora,
            },
        ],
    }
};

export default cesta;
