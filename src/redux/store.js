import {renderEntireTree} from '../index'
const state = {
    nav: {
        logo: require('../logo.jpg'),
        logoName: 'Unical',
        linkNav: [
            {
                href: "#",
                name: 'Dashbord'
            },
            {
                href: "#",
                name: 'Policy managment'
            },
            {
                href: "#",
                name: 'User managment'
            },
            {
                href: "#",
                name: 'Settings'
            }
        ],
        navNotice: {
            icon: 'fa fa-bell',
            counter: 4
        },
        profileImg: "https://img5.goodfon.ru/wallpaper/nbig/7/bd/naruto-uzumaki-naruto-paren-sila.jpg",
        profileName: 'Наруто узумаки',
        inputsFields: {
            name: 'Создать пост',
            inputs: [
                {
                  placeholder: 'Задание',
                  id: 1,
                  labelName: 'Задание',
                  task: '',
                  changeTask: (text) => {
                      state.nav.inputsFields.inputs[0].task = text;
                      renderEntireTree();
                  }
                },
                {
                    placeholder: 'Опишите задание',
                    id: 2,
                    labelName: 'Описание',
                    description: '',
                    changeDescription: (text) => {
                        state.nav.inputsFields.inputs[1].description = text;
                        renderEntireTree();
                    }
                },
                {
                    placeholder: 'Ваш адрес',
                    id: 3,
                    labelName: 'Адрес',
                    adress: '',
                    changeAdress: (text) => {
                        state.nav.inputsFields.inputs[2].adress = text;
                        renderEntireTree();
                    }
                },
                {
                    placeholder: 'Цена',
                    id: 4,
                    labelName: 'Цена',
                    cost: '',
                    changeCost: (text) => {
                        state.nav.inputsFields.inputs[3].cost = text;
                        renderEntireTree();
                    }
                },
            ]
        },
    },
    taskContainer: {
        ddWrapper: {
            ddHeader: {
                title: 'Все задание',
                icon: 'fa fa-angle-down'
            },
        },
        taskItem: [
            {
                img: 'https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg',
                userName: "Тимур Саникидзе",
                title: 'Как развить харизму.',
                moreInfo: 'Подробней',
                cost: '500',
                data: '25.01.2020'
            },
            // {
            //     img: 'https://sun9-42.userapi.com/c855420/v855420522/e6020/PIygrO_c5z0.jpg',
            //     userName: "Петя Михаличенко",
            //     recomedation: "Советуем",
            //     newbie: "Новичок",
            //     title: 'Нужна самка на вечер',
            //     location: "Краснодар, 400м от вас",
            //     cost: '1500',
            //     data: '11.01.2020'
            // },
            // {
            //     img: 'https://sun9-40.userapi.com/c844720/v844720507/1fe367/zI6WSsL2-Sg.jpg',
            //     userName: "Даша Златская",
            //     recomedation: "Советуем",
            //     newbie: "Новичок",
            //     title: 'Хочу секса.',
            //     location: "Краснодар, 100м от вас",
            //     cost: '100',
            //     data: '20.01.2020'
            // },
            // {
            //     img: 'https://sun9-8.userapi.com/c856520/v856520157/7e517/7p99z8vSGKg.jpg',
            //     userName: "Катя Краснова",
            //     recomedation: "Советуем",
            //     newbie: "Новичок",
            //     title: 'Сделать за меня дз.',
            //     location: "Краснодар, Удалено",
            //     cost: '500',
            //     data: '20.01.2020'

            // },
            // {
            //     img: 'https://sun9-30.userapi.com/c205520/v205520263/226bb/fVqrYXi94XA.jpg',
            //     userName: "Алиса Рудковская",
            //     recomedation: "Советуем",
            //     newbie: "Новичок",
            //     title: 'Разработать сайт.',
            //     location: "Краснодар, Удалено",
            //     cost: '145.000',
            //     data: '20.01.2020'
            // },
        ],
        addTask: (task) => {

            if(state.nav.inputsFields.inputs[0].task !== '') {
                let newTask = {
                    img: state.nav.profileImg,
                    userName: state.nav.profileName,
                    title: state.nav.inputsFields.inputs[0].task,
                    cost:  state.nav.inputsFields.inputs[3].cost,
                    data: '27.01.2020'
               };
               state.taskContainer.taskItem.push(newTask);
               renderEntireTree();
               state.nav.inputsFields.inputs[0].task = '';
               state.nav.inputsFields.inputs[3].cost = '';        
            }
        },
    },
   
}

export default state;