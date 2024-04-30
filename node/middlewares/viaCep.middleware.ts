import parser from 'co-body';

async function viaCepMiddleware(ctx : Context, next : () => Promise<unknown>) {
    const { clients : {viaCep} } = ctx;

    const { cep } = await parser(ctx.req);

    const response = await viaCep.searchCep('');

    ctx.status = 200;
    ctx.body = {
        response
    };

    next();
}