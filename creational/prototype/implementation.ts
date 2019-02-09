namespace PrototypePattern {

    interface Prototype {
        clone(): Prototype;
    }

    export class User implements Prototype {
        private age: number;
        private name: string;
        private sex: string;

        constructor(age: number, name: string, sex: string) {
            this.age = age;
            this.name = name;
            this.sex = sex;
        }

        clone() {
            return new User(this.age, this.name, this.sex);
        }

        setAge(age: number) {
            this.age = age;
        }

        setName(name: string) {
            this.name = name;
        }

        setSex(sex: string) {
            this.sex = sex;
        }
    }

    export class AdminUser extends User implements Prototype {
        private isAdmin: boolean;

        constructor(age: number, name: string, sex: string) {
            super(age, name, sex);
            this.isAdmin = true;
        }

        clone(): AdminUser {
            let clonedUser = super.clone() as AdminUser;
            clonedUser.isAdmin = true;
            return clonedUser;
        }
    }

}
