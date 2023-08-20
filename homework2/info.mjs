    const birthday = new Date('10.03.1987');
    const data = {
        name: 'максим лескин',
        dateBirth: birthday ,
        purpose: 'карьерный рост'
    };
    const words = data.name.split(' ');
    const purpose = data.purpose[0].toUpperCase() + data.purpose.substring(1);

    export const Person = ( data ) => {
        this.id = Math.random().toString(36).substring(3);
        this.firstName =  words[0][0].toUpperCase() + words[0].substring(1);
        this.lastName = words[1][0].toUpperCase() + words[1].substring(1);
        this.dataBirth = birthday.toLocaleDateString();
        this.age = Math.floor ((new Date() - birthday) / 31556952000 );
        this.purpose = purpose;
    }
    export const person = new Person();

    
    // module.exports = { person };

