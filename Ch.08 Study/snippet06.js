//이미 catch 메서드가 프라미스가 거부될떄 호출되는 핸들러를 등록한다는 것을
//배웠다. 여러분이 제공하는 핸들러가 이행이 아닌 거부시 호출된다는 점을
//제외하면 catch는 정확히 then과 같다

p2 = p1.catch(error => doSomethingWith(error))

//이 catch를 사용하면 p1에 거부핸들러를 등록하여 원래 프라미스(p1)에 발생하는
//일과 핸들러에서 수행하는 작업에 따라 완료되거나 거부될 새 프라미스(p2)를 
//만들고 반환한다.