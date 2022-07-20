abstract class Department {
  static fiscalYear = 2020;
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error('No reports found.');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value!');

    this.addReport(value);
  }

  addEmployee(employee: string): void {
    if (employee === 'Max') return;

    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

// const employee1 = Department.createEmployee('Max');
// console.log(employee1, Department.fiscalYear);

// const it = new ITDepartment('d1', ['Jordon']);

// it.addEmployee('Max');
// it.addEmployee('Manu');

// it.describe();

// it.printEmployeeInformation();

// console.log(it);

// accounting.mostRecentReport = 'Year End Report';
// accounting.addReport('Something went wrong...');

// console.log(accounting.mostRecentReport);

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// accounting.printReports();
// accounting.printEmployeeInformation();

// const salesCopy = { name: 'test', describe: sales.describe };

// salesCopy.describe();
