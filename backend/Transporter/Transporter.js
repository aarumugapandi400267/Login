import { createTransport } from 'nodemailer';
const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'aarumugapandi762004@gmail.com',
    pass: 'wkot qubf elww ufxm',
  },
});
export {transporter}