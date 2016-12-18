
# 字符串

## includes(), startsWith(), endsWith()

扩展indexOf，更明确的位置判断。第一个参数标示匹配的字符串，第二个参数标示开始搜索的索引值。

```javascript
var s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

## repeat()

重复字符串N次，第一个参数标示重复次数，通过parseInt(Number(N), 10)取整。如果转换后结果为NaN，等同于重复0次，结果为''

```javascript
'yk'.repeat(-0.9) // ''
'yk'.repeat(2.9) // 'ykyk'
'yk'.repeat('2.9a') // ''
```