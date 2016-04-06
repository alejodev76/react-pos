
class CommonApi 
{
    static getEmployeeList()
    {
        return _employeeList;
    }
    
    static getJobCodeList()
    {
        return _jobCodes
    }
}

const _employeeList =
[
    {EmployeeName:'Adams, Grizzley', ID:1},
    {EmployeeName:'Brown, Anna', ID:2},
    {EmployeeName:'Dodger, Roger', ID:3},
    {EmployeeName:'Smith, John', ID:4},
    {EmployeeName:'Perez, Ximena', ID:5},
    {EmployeeName:'Ramirez, Roger', ID:6},
    {EmployeeName:'Gonzales, Pedro', ID:7},
    {EmployeeName:'Mitrovic, Branka', ID:8},
    {EmployeeName:'Taylor, Adam', ID:9}
]

const _jobCodes =
[
    {name:'Bartender',value:'Bartender'},
    {name:'Busboy',value:'Busboy'},
    {name:'Server',value:'Server'},
]

export default CommonApi;