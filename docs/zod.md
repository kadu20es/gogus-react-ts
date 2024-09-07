## Zod, zodResolver, react-hook-form

Zod é uma biblioteca que auxilia na validação dos dados do formulário.
Funciona em conjunto com a biblioteca useform da biblioteca react-hook-form

#### Instalação das bibliotecas:

~~~
npm install react-hook-form zod @hookform/resolvers 
~~~

#### Uso:

Para começar a usar, é necessário ter os inputs criados:

```html
<input
    type="text"
    className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
    placeholder="Digite o CNPJ"
/>
```
Após os input prontos, é hora de criar o schema de validação.
Importe a biblioteca zod e crie a constante com objeto de validação. Este objeto deverá ter os dados que serão utilizados no formulário:

```typescript
const createUserFormSchema = z.object({
        nm_fantasia: z.string(),
        rz_social: z.string(),
        cnpj: z.string(),
        ie: z.string(),
        email: z.string(),
        contato: z.string(),
        status: z.enum(['ativo','inativo']),
    }) 
```
Neste momento é possível definir as regras de validação e mensagens de erro que serão enviadas ao formulário em caso de erro:

```typescript
const createUserFormSchema = z.object({
        nm_fantasia: z.string()
            .min(10, "Nome fantasia é um dado obrigatório."),
        rz_social: z.string()
            .min(10, "Razão Social é um dado obrigatório."),
        cnpj: z.string()
            .min(14, "CNPJ é um dado obrigatório."),
        ie: z.string()
            .min(9, "Inscrição Estadual é um dado obrigatório."),
        email: z.string()
            .email("Formato de e-mail inválido")
            .toLowerCase(),
        contato: z.string(),
        status: z.enum(['ativo','inativo']),
    })
```

Após criar o schema, é preciso criar um tipo "UserFormdata" e passar para ele a inferência do schema criado:

```typescript
type CreateUserFormData = z.infer<typeof createUserFormSchema>
```

Em seguida, associá-lo ao useForm utilizando <em>Generics</em> para:

```typescript
const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    })
```

Feitos esses passos, é hora de inserir no formulário os elemenos de validação. Vamos "registrar" o dado do input no formData tilizando as regras de validação do zod (createUserFormSchema):

```jsx
<input
    type="text"
    className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
    placeholder="Digite o nome fantasia"
    {...register('nm_fantasia')}/>
    {errors.nm_fantasia && <span>{errors.nm_fantasia.message}</span>}
```

