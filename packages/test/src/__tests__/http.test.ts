import { FuncWarpper } from '../../src/index';

test('http', async function () {
  const func = new FuncWarpper(require.resolve('./funcs/http.func'));

  const res = await func.handler({}, {});

  expect(res.body).toEqual('{"data":true}');
});

test('JSONhandler', async function () {
  const func = new FuncWarpper(require.resolve('./funcs/json.func'));

  const res = await func.JSONhandler({ key: 1 });

  expect(res.body).toEqual('{"data":1}');
});
