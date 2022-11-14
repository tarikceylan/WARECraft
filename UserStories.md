## User Stories

- [x] Resources must be available **only to system users**
- [x] Users must be **logged in** to the system to use it
- [x] Users must login at least **once per week**
- [ ] Users must be able to **logout** from the system
- [ ] Every registered user must have a role. User roles are as follows:
  - **Employee** - company employee with only viewing permissions
  - **Officer** - warehouse officer with query permissions. (e.g. inserting, modifying, removing data)
  - **Admin** - warehouse admin with administrative permissions in the system
- [x] Only users with **Admin** role are allowed to **create/modify/delete users**
- [ ] **All requests** made to the system must be **logged automatically with a timestamp and a unique ID**
- [x] All users must have a unique username, password, exactly one role, and an active status
- [x] All products must have a name, at least one category, quantity, and a unique productCode
- [x] There should be **seperate endpoints** for consuming and filling products
