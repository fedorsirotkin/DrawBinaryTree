// Конфигурация бинарного дерева
var config = {
    // Контейнер для отрисовки
    container: '#custom-colored',
    // Выравнивание связей для узлов
    nodeAlign: 'bottom',
    // Внешний вид линии связи между узлами
    connectors: {
        type: 'step'
    },
    // Стилизация узла
    node: {
        HTMLclass: 'nodeStyling'
    }
},

a = {
    HTMLclass: 'light-gray',
    text: {
        name: 'A',
        title: '10',
    }
},

b = {
    parent: a,
    HTMLclass: 'light-gray',
    text: {
        name: 'B',
        title: '6',
    }
},

c = {
    parent: a,
    HTMLclass: 'light-gray',
    text: {
        name: 'C',
        title: '14',
    }
},

d = {
    parent: b,
    HTMLclass: 'light-gray',
    text: {
        name: 'D',
        title: '5',
    }
},

e = {
    parent: b,
    HTMLclass: 'light-gray',
    text: {
        name: 'E',
        title: '8',
    }
},

f = {
    parent: c,
    HTMLclass: 'light-gray',
    text: {
        name: 'F',
        title: '11',
    }
},

g = {
    parent: c,
    HTMLclass: 'light-gray',
    text: {
        name: 'G',
        title: '18',
    }
},

h = {
    parent: f,
    HTMLclass: 'light-gray',
    text: {
        name: 'H',
        title: '99',
    }
},

k = {
    parent: f,
    HTMLclass: 'light-gray',
    text: {
        name: 'K',
        title: '66',
    }
},


chart = [
    config,
    a, b, c, d, e, f, g, h, k
];