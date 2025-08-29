export type FeeInstallment = {
  id: string;
  installment: string;
  fee: number;
  paid: number;
  dues: number;
};

export const feeData: FeeInstallment[] = [
  {
    id: "1",
    installment: "APR",
    fee: 7240,
    paid: 7240,
    dues: 0,
  },
  {
    id: "2",
    installment: "MAY-JUN",
    fee: 4630,
    paid: 4630,
    dues: 0,
  },
  {
    id: "3",
    installment: "JUL",
    fee: 2315,
    paid: 2315,
    dues: 0,
  },
  {
    id: "4",
    installment: "AUG",
    fee: 2315,
    paid: 0,
    dues: 2315,
  },
  {
    id: "5",
    installment: "SEP",
    fee: 2315,
    paid: 0,
    dues: 2315,
  },
  {
    id: "6",
    installment: "OCT",
    fee: 7140,
    paid: 0,
    dues: 7140,
  },
  {
    id: "7",
    installment: "NOV",
    fee: 2315,
    paid: 0,
    dues: 2315,
  },
  {
    id: "8",
    installment: "DEC",
    fee: 2315,
    paid: 0,
    dues: 2315,
  },
  {
    id: "9",
    installment: "JAN",
    fee: 2315,
    paid: 0,
    dues: 2315,
  },
  {
    id: "10",
    installment: "FEB-MAR",
    fee: 4630,
    paid: 0,
    dues: 4630,
  },
];

export const studentFeeInfo = {
  name: "ABHIJEET RAO",
  id: "10220E6147",
  totalDues: 25055,
};
