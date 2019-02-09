/// <reference path="implementation.ts" />
namespace PrototypePattern {
    export namespace Demo {

        export function show() : void {

            const users: PrototypePattern.User[] = [];
            const clonedUsers: PrototypePattern.User[] = [];
            const user1 = new PrototypePattern.User(12, 'Yaroslav', 'male');

            users.push(user1);

            console.log('USER1:', user1);// TODO: remove it

            const user1Cloned = user1.clone();

            user1Cloned.setName('Laurie');
            user1Cloned.setAge(25);
            user1Cloned.setSex('female');

            users.push(user1Cloned);


            console.log('USER1 AFTER CLONING:', user1);// TODO: remove it
            console.log('CLONE FROM USER1:', user1Cloned);// TODO: remove it


            // CLONE USER OBJECT AND CREATE COPY OF USERS ONE MORE TIME
            // Also, User can have subclasses with implemented method 'clone'
            // 'clone' method should call method from super class for taking care of
            // private members of super class
            // Also, you can save some prototypes in map for easily creating
            // new objects via cloning existing saved prototypes
            users.forEach(user => {
               clonedUsers.push(user.clone());
            });

            console.log('CLONED USERS: ', clonedUsers);// TODO: remove it

        }

    }
}
