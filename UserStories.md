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
