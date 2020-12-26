
const KEYS = {
    employees: 'empolyees',
    employeeId:'employeeId'
}

export const getDepartmentCollection = () => ([
    {id: '1', title: 'Web Developer'},
    {id: '2', title: 'React Developer'},
    {id: '3', title: 'Android Developer'},
    {id: '4', title: 'IOS Developer'},
])

// inserting the employee

export function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export function updateEmployee(data) {
    let employees = getAllEmployees();
    let recordIndex = employees.findIndex(x => x.id == data.id);
    employees[recordIndex] = { ...data }
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function deleteEmployee(id) {
    let employees = getAllEmployees();
    employees = employees.filter(x => x.id != id)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

// generate employee ID 

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}


export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    
    return JSON.parse(localStorage.getItem(KEYS.employees))
}