for await (const value of fetchInseries(["1.json", "2.json", "3.sjon"]))
{
  console.log(value);
}
