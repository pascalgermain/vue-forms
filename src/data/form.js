import VueFormGenerator from 'vue-form-generator'

export default {
  model: {
    id: 1,
    name: 'John Doe',
    password: 'J0hnD03!x4',
    skills: ['JavaScript', 'VueJS'],
    email: 'john.doe@gmail.com',
    status: true,
    awesome: 'Awesome'
  },
  schema: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'ID (disabled text field)',
        model: 'id',
        readonly: true,
        disabled: true
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Name',
        model: 'name',
        placeholder: 'Your name',
        featured: true,
        required: true
      },
      {
        type: 'input',
        inputType: 'password',
        label: 'Password',
        model: 'password',
        min: 6,
        required: true,
        hint: 'Minimum 6 characters',
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'select',
        label: 'Skills',
        model: 'skills',
        values: ['Javascript', 'VueJS', 'CSS3', 'HTML5']
      },
      {
        type: 'input',
        inputType: 'email',
        label: 'E-mail',
        model: 'email',
        placeholder: 'User\'s e-mail address'
      },
      {
        type: 'checkbox',
        label: 'Status',
        model: 'status',
        default: true
      },
      {
        type: 'awesome',
        label: 'Awesome (custom field)',
        model: 'awesome'
      }
    ]
  }
}
