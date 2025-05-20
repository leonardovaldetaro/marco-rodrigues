# Projeto Next.js com TypeScript, CSS Modules e Sass

Este é um projeto criado do zero utilizando Next.js com TypeScript, CSS Modules e Sass como pré-processador de estilos.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **CSS Modules**: Escopo local para estilos CSS.
- **Sass**: Pré-processador CSS para facilitar a escrita de estilos.

## Como Iniciar o Projeto

### 1. Inicializar o Projeto
Execute o comando abaixo para criar o projeto:
```bash
npm install next@latest react@latest react-dom@latest
```

### 2. Instalar Dependências Adicionais
Instale o Sass para usar como pré-processador:
```bash
npm install sass
```

### 3. Estrutura do Projeto
A estrutura inicial do projeto será semelhante a:
```
.
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
├── styles/
│   ├── Home.module.scss
│   ├── globals.css
├── public/
├── tsconfig.json
├── package.json
```

### 4. Configuração de Estilos
- Utilize arquivos `.module.scss` para criar estilos com escopo local.
- Exemplo de uso no componente `index.tsx`:
```tsx
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Bem-vindo ao projeto Next.js com TypeScript e Sass!</h1>
        </div>
    );
}
```

- Exemplo de `Home.module.scss`:
```scss
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a build de produção.
- `npm start`: Inicia o servidor de produção.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este projeto. Faça um fork, crie uma branch e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).