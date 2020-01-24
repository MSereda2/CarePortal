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
        inputsFields: {
            name: 'Создать пост',
            inputs: [
                {
                  placeholder: 'Задание',
                  id: 1,
                  labelName: 'Задание',
                  task: '',
                  getValue: (text) => {
                      state.nav.inputsFields.inputs[0].task = text;
                      renderEntireTree();
                  }
                },
                {
                    placeholder: 'Опишите задание',
                    id: 2,
                    labelName: 'Описание',
                    description: '',
                    getValue: (text) => {
                        state.nav.inputsFields.inputs[1].description = text;
                        renderEntireTree();
                    }
                },
                {
                    placeholder: 'Ваш адрес',
                    id: 3,
                    labelName: 'Адрес',
                    adress: '',
                    getValue: (text) => {
                        state.nav.inputsFields.inputs[2].adress = text;
                        renderEntireTree();
                    }
                },
                {
                    placeholder: 'Цена',
                    id: 4,
                    labelName: 'Цена',
                    cost: '',
                    getValue: (text) => {
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
                title: 'Ищу ученика для проекта сильная личность.',
                cost: '500р',
                time: '3 месяц',
                data: '0:48'
            },
            {
                img: 'https://sun9-42.userapi.com/c855420/v855420522/e6020/PIygrO_c5z0.jpg',
                title: 'Нужна самка на вечер',
                cost: '1500р',
                time: '30мин',
                data: '0:33'
            },
            {
                img: 'https://sun9-40.userapi.com/c844720/v844720507/1fe367/zI6WSsL2-Sg.jpg',
                title: 'Хочу секса.',
                cost: '10р',
                time: '1.5 месяца',
                data: '1:17'
            },
            {
                img: 'https://sun9-8.userapi.com/c856520/v856520157/7e517/7p99z8vSGKg.jpg',
                title: 'Сделать за меня дз.',
                cost: '500р',
                time: '1 день',
                data: '11:39'
            },
            {
                img: 'https://sun9-30.userapi.com/c205520/v205520263/226bb/fVqrYXi94XA.jpg',
                title: 'Разработать сайт.',
                cost: '145.000р',
                time: '3 месяц',
                data: '2:48'
            },
        ],
        addTask: (task) => {

           let newTask = {
                img: 'https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg',
                title: state.nav.inputsFields.inputs[0].task,
                cost:  state.nav.inputsFields.inputs[3].cost,
                time: '3 месяц',
                data: '0:48'
           };
           state.taskContainer.taskItem.push(newTask);
           renderEntireTree()
        },
    },
   
}

export default state;