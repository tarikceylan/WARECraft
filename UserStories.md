## User Stories

- [ ] Resources must be available **only to system users**
- [ ] Users must be **logged in** to the system to use it
- [ ] Users must login at least **once per week**
- [ ] Users must be able to **logout** from the system
- [ ] Every registered user must have a role. User roles are as follows:
  - **Employee** - company employee with only viewing permissions
  - **Officer** - warehouse officer with query permissions. (e.g. inserting, modifying, removing data)
  - **Manager** - warehouse manager with administrative permissions in the system
- [ ] Only users with **Manager** role are allowed to **create/modify/delete users**
- [ ] **All requests** made to the system must be **logged automatically with a timestamp and a unique ID**
- [x] All users must have a unique username, password, exactly one role, and an active status
- [x] All products must have a name, at least one category, quantity, and a unique productCode
- [x] There should be **seperate endpoints** for consuming and filling products
