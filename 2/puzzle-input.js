const puzzleinput = `1: 9 red, 2 green, 13 blue; 10 blue, 2 green, 13 red; 8 blue, 3 red, 6 green; 5 green, 2 red, 1 blue
2: 2 green, 2 blue, 16 red; 14 red; 13 red, 13 green, 2 blue; 7 red, 7 green, 2 blue
3: 6 red, 4 green, 7 blue; 7 blue, 9 red, 3 green; 2 red, 4 green; 6 red, 2 blue; 7 blue, 9 red, 5 green
4: 8 red, 2 green, 2 blue; 5 red, 2 blue, 3 green; 7 red, 9 green, 2 blue; 10 blue, 16 green, 1 red; 6 blue, 1 green, 8 red
5: 12 blue, 6 red, 1 green; 10 green, 8 blue, 15 red; 1 green, 12 red, 11 blue; 3 green, 11 blue, 1 red; 7 blue, 5 red, 5 green; 11 green, 2 blue
6: 3 blue, 10 green, 2 red; 5 green; 6 blue, 3 red
7: 3 green, 1 blue, 4 red; 3 red, 13 blue; 14 blue, 6 red; 7 green, 15 blue, 9 red; 1 green, 3 red, 9 blue
8: 19 red, 1 green, 4 blue; 14 blue; 2 red, 3 blue
9: 5 green, 14 blue, 3 red; 8 red, 16 blue, 5 green; 12 green, 15 red, 4 blue; 14 blue, 17 red; 6 red, 11 blue, 8 green
10: 9 red, 7 blue; 6 red, 3 blue, 4 green; 1 red, 5 green, 3 blue; 5 red, 9 green, 6 blue; 7 blue, 6 green
11: 2 blue, 10 green; 11 green; 2 green, 1 red, 2 blue; 2 blue, 1 green, 1 red; 2 blue, 18 green
12: 6 green, 2 red; 2 green; 11 red, 6 green, 1 blue
13: 1 blue, 10 red, 2 green; 2 green, 7 red; 9 green, 9 red; 1 red, 4 green
14: 7 red, 15 green, 17 blue; 10 green, 6 red, 12 blue; 3 blue, 7 red, 3 green
15: 8 green; 10 red, 17 green, 1 blue; 9 red, 1 blue; 6 green, 8 red; 1 green, 1 red; 17 green, 2 red
16: 3 blue, 2 green, 7 red; 12 blue, 9 red, 5 green; 8 green, 3 blue, 5 red; 6 red, 2 blue, 11 green; 3 green, 8 blue, 9 red; 1 green, 5 red, 12 blue
17: 2 green, 1 blue, 3 red; 1 blue, 1 green, 4 red; 2 blue, 2 green, 11 red; 1 red, 2 green; 2 blue, 10 red, 2 green
18: 3 blue, 3 red; 8 blue, 1 green, 5 red; 4 green, 6 blue, 3 red
19: 9 red, 3 green, 14 blue; 15 red, 2 blue, 1 green; 2 green, 15 red, 5 blue; 3 red, 3 blue, 1 green
20: 2 red, 1 blue, 5 green; 11 blue, 1 red, 4 green; 6 blue, 2 red, 2 green; 13 blue, 2 red, 10 green; 7 green, 13 blue
21: 3 red, 1 green, 1 blue; 3 red, 7 blue, 1 green; 1 green, 4 red, 7 blue; 1 green; 6 blue, 3 red; 2 red, 6 blue
22: 7 red, 5 green, 2 blue; 14 red; 2 blue, 5 green, 15 red; 1 blue, 5 green, 14 red; 13 red, 1 green; 3 red, 1 green
23: 2 green, 8 blue, 5 red; 3 blue, 9 red; 9 blue, 2 green; 9 red, 2 green, 5 blue; 5 red, 2 green
24: 14 green, 7 blue, 2 red; 7 blue, 3 red, 16 green; 1 blue, 5 red, 6 green; 3 blue, 7 red, 2 green; 7 red, 9 green
25: 3 blue, 8 red, 15 green; 2 red, 8 green, 2 blue; 16 red, 3 blue, 13 green
26: 1 blue, 9 red, 8 green; 6 green, 1 red, 3 blue; 7 red, 8 blue, 6 green; 9 red, 7 green
27: 6 red, 9 green, 1 blue; 8 green, 3 red, 1 blue; 8 green, 15 red; 14 red, 11 green, 2 blue; 11 green, 4 red, 2 blue; 1 blue, 16 red
28: 6 green, 10 blue, 4 red; 6 red, 2 blue, 6 green; 6 green, 14 blue, 17 red; 9 green, 1 red, 9 blue
29: 10 blue, 2 red; 3 red, 11 green, 7 blue; 8 green, 2 blue, 7 red; 17 green, 5 blue, 9 red; 19 green, 10 red, 9 blue
30: 6 blue, 9 green, 6 red; 17 green, 10 blue, 8 red; 17 green, 12 red, 7 blue
31: 9 red, 1 green, 1 blue; 3 red; 6 red, 1 blue, 1 green; 2 blue, 7 red
32: 3 green, 8 blue; 5 red, 4 green, 2 blue; 10 blue, 3 green; 2 green, 4 blue; 2 green, 16 blue, 2 red
33: 2 red, 8 blue; 2 green, 6 red, 1 blue; 7 red, 12 blue; 1 red, 1 green, 7 blue; 1 green, 3 red, 2 blue
34: 15 green; 1 red, 6 green; 6 blue, 1 red, 17 green; 14 green, 3 blue; 11 green, 1 red; 4 green, 1 blue
35: 4 red, 3 green, 12 blue; 20 blue, 2 red, 2 green; 4 red, 4 green, 8 blue
36: 8 red, 7 green; 15 red, 2 blue, 3 green; 2 red, 1 blue, 5 green; 4 green, 1 blue, 9 red; 14 red, 1 blue, 1 green; 11 green, 12 red
37: 3 red, 3 green, 8 blue; 3 blue; 1 green, 3 blue, 2 red; 1 red, 2 blue, 2 green
38: 18 red, 12 blue, 7 green; 7 blue, 10 red, 10 green; 1 green, 6 blue, 10 red; 7 red, 3 blue, 12 green; 9 green, 5 blue, 3 red
39: 2 blue, 2 green, 2 red; 5 blue, 1 green; 1 blue; 1 red, 5 blue, 2 green
40: 4 blue, 1 green; 5 blue, 1 red, 7 green; 2 red, 5 green, 5 blue
41: 15 blue, 3 green, 16 red; 16 blue, 18 red, 8 green; 8 green, 1 blue, 12 red; 11 blue, 5 green, 18 red; 5 green, 20 red, 17 blue
42: 7 red, 10 green; 1 blue, 5 red, 6 green; 6 red, 3 blue, 9 green; 6 green, 3 blue, 8 red; 4 green, 4 red, 2 blue; 2 blue, 1 green
43: 6 blue, 5 red, 1 green; 2 green; 2 blue, 1 red; 4 green, 5 blue, 2 red
44: 10 green; 8 green; 10 green, 2 blue, 10 red
45: 9 green, 3 red; 8 green, 2 blue; 2 green, 8 blue
46: 2 red, 9 blue, 9 green; 6 red, 10 green, 11 blue; 5 red, 4 green, 3 blue; 3 red, 2 green, 14 blue; 5 green, 5 red, 12 blue; 1 red, 9 green, 18 blue
47: 2 red, 3 blue; 2 green; 2 green, 3 blue
48: 9 green, 6 red, 1 blue; 3 blue, 12 green, 8 red; 4 red, 5 green, 5 blue; 14 green, 5 red; 1 red, 18 green, 4 blue
49: 11 red, 10 green, 12 blue; 4 green, 6 red, 6 blue; 9 red, 3 blue, 7 green; 6 red, 10 green, 14 blue; 8 blue, 10 red, 5 green; 6 blue, 17 green, 6 red
50: 8 blue, 4 green, 2 red; 1 red; 10 green, 4 blue, 1 red; 5 green, 8 blue, 2 red; 6 red, 1 blue, 3 green; 6 blue, 6 red, 1 green
51: 3 red, 3 blue, 2 green; 8 green, 5 red; 11 red, 11 green, 2 blue; 12 green, 2 blue, 19 red; 12 red, 1 blue, 12 green; 10 green, 1 blue, 3 red
52: 2 blue, 15 red; 19 red, 4 green; 11 red, 3 green, 6 blue; 1 green, 2 blue, 8 red; 3 blue, 6 red; 1 green, 7 blue, 1 red
53: 1 green; 2 green, 1 blue; 1 red
54: 1 red, 1 green, 12 blue; 1 green, 5 red, 12 blue; 2 green, 4 blue; 13 blue, 2 red, 2 green; 2 green, 10 blue, 1 red; 5 red, 1 green, 7 blue
55: 4 green, 16 blue, 11 red; 6 red, 15 blue; 6 blue, 4 green, 5 red; 10 blue, 10 red, 3 green
56: 3 red, 8 blue, 11 green; 9 green, 5 red, 4 blue; 1 blue, 4 red, 4 green
57: 3 red, 12 green, 7 blue; 13 green, 14 blue, 1 red; 4 red, 6 green, 9 blue; 12 blue, 13 green
58: 4 red, 4 blue, 3 green; 3 blue, 4 red; 11 green, 2 blue, 2 red
59: 12 green, 5 red, 1 blue; 7 red, 1 blue, 3 green; 17 green, 2 blue, 4 red; 12 red, 17 green; 7 red, 10 green, 2 blue
60: 5 blue, 3 green; 5 green, 11 red, 12 blue; 1 red, 2 blue, 15 green
61: 12 blue, 1 green, 12 red; 14 blue, 12 green, 5 red; 7 red, 12 blue, 16 green
62: 1 green, 8 red, 8 blue; 11 blue, 2 red; 1 green, 10 blue, 12 red; 7 red, 2 blue, 1 green; 6 red, 1 green, 11 blue; 1 green, 6 red, 6 blue
63: 17 green, 16 red, 10 blue; 9 red, 14 green, 11 blue; 5 green, 16 red
64: 12 red, 1 green, 1 blue; 4 blue, 7 red; 10 blue, 4 green, 6 red; 8 blue, 4 red, 13 green; 13 green, 9 blue, 9 red; 13 blue, 7 red, 3 green
65: 4 blue, 3 green, 4 red; 10 blue, 5 red, 7 green; 1 red, 4 blue, 3 green; 13 green, 1 red, 9 blue; 8 green, 3 blue
66: 17 green, 13 red, 3 blue; 15 green, 2 red, 4 blue; 10 red, 4 blue, 5 green; 6 red, 5 blue, 7 green; 3 red, 10 green, 1 blue
67: 10 blue; 4 blue, 4 red; 4 blue, 3 green, 3 red; 1 green, 5 blue, 3 red
68: 6 green, 6 blue, 3 red; 13 blue, 1 red; 14 blue, 6 red, 2 green; 14 blue, 7 red, 2 green
69: 2 green, 2 blue, 3 red; 1 red, 6 blue, 4 green; 8 green, 9 red; 2 green
70: 2 red, 7 green; 1 red, 10 green, 1 blue; 6 blue, 14 green; 6 green, 2 blue, 1 red; 5 blue, 10 green, 2 red; 2 blue, 11 green
71: 6 blue, 4 red, 7 green; 13 green, 6 red, 3 blue; 8 green, 2 blue, 4 red
72: 3 blue, 1 green, 11 red; 5 green, 11 blue, 4 red; 7 blue, 13 red; 14 blue, 12 red, 5 green
73: 8 red, 19 blue, 4 green; 15 green, 3 red, 16 blue; 7 blue, 9 red
74: 5 green, 8 red, 6 blue; 8 green, 9 red; 11 green, 6 blue
75: 1 green, 6 red, 4 blue; 2 green, 13 blue, 6 red; 10 red, 1 green, 10 blue
76: 3 blue, 6 green, 2 red; 7 red, 6 blue, 4 green; 5 blue, 6 red, 3 green
77: 17 red, 6 green; 7 green, 12 red, 4 blue; 4 red, 7 green, 14 blue
78: 1 green, 15 red, 5 blue; 16 green, 3 red, 18 blue; 13 blue, 1 red, 13 green
79: 7 red, 1 blue, 3 green; 2 green, 5 red; 5 green, 2 blue, 8 red; 11 red, 1 blue, 3 green
80: 9 blue, 4 red; 4 green, 3 blue, 4 red; 7 red, 9 blue, 4 green; 5 red, 9 blue, 4 green; 3 red, 11 blue, 5 green; 6 red, 4 green, 11 blue
81: 1 red, 16 green, 2 blue; 4 red, 15 green, 10 blue; 2 red, 9 blue, 17 green; 10 blue, 16 green
82: 4 blue, 3 green; 2 green, 3 blue; 4 blue, 2 red, 2 green; 2 red, 1 green
83: 10 blue, 8 red, 19 green; 8 red, 4 blue, 17 green; 2 blue, 9 red, 6 green; 11 blue, 2 red, 17 green; 1 red, 17 green, 8 blue
84: 4 blue, 1 red, 6 green; 7 blue, 10 green, 4 red; 1 green, 7 blue, 1 red
85: 1 blue, 2 red, 1 green; 5 blue, 2 green, 9 red; 1 green, 2 red, 10 blue
86: 17 blue, 9 green, 9 red; 19 red, 12 green, 11 blue; 19 red, 9 green, 17 blue
87: 11 green, 6 red; 1 green, 4 blue; 16 green, 5 red; 14 green, 1 red, 14 blue; 12 blue, 8 green, 6 red; 4 red, 11 blue, 2 green
88: 6 green, 7 red, 1 blue; 5 red, 1 green, 1 blue; 3 red, 6 green
89: 1 green, 8 blue, 1 red; 8 red, 1 green; 4 red, 6 blue; 4 red, 10 blue; 8 red, 9 blue, 1 green
90: 6 blue, 12 green; 1 red, 4 blue, 14 green; 5 red, 5 blue, 6 green; 1 blue, 3 red, 3 green; 7 green, 4 blue; 2 green, 2 red, 1 blue
91: 2 blue, 12 red, 4 green; 7 green, 6 red; 1 blue, 7 green, 6 red; 5 green, 5 red, 1 blue; 1 blue, 11 green, 9 red; 4 red, 1 blue, 2 green
92: 4 blue, 12 green; 6 red, 4 blue, 2 green; 5 blue, 1 red, 17 green; 6 red, 4 blue, 15 green; 3 blue, 5 red, 13 green
93: 8 green, 2 blue, 16 red; 7 green, 3 blue, 8 red; 9 green, 4 red, 3 blue; 13 red, 5 blue; 5 blue, 1 green, 10 red; 1 blue, 9 red
94: 7 blue, 5 red, 14 green; 8 green, 3 blue, 1 red; 4 blue, 8 red
95: 3 blue, 4 green, 10 red; 5 blue, 17 red, 2 green; 18 red, 2 green, 5 blue; 3 blue, 3 green, 2 red; 4 blue, 18 red; 6 red, 2 green
96: 1 blue, 9 green, 2 red; 3 red, 10 green; 2 red, 8 green, 4 blue; 17 green, 2 blue; 10 green, 1 blue, 1 red; 8 green, 1 blue, 3 red
97: 9 green, 1 blue; 1 blue, 6 green; 7 blue, 3 green; 3 red; 17 green, 5 red; 1 blue, 17 green, 5 red
98: 4 blue, 7 green, 2 red; 15 green, 10 blue, 1 red; 4 blue, 5 green; 1 green, 2 red, 5 blue
99: 2 green, 1 blue, 14 red; 11 red, 6 blue, 5 green; 10 red, 18 blue, 1 green; 5 green, 9 blue, 9 red
100: 5 blue, 5 green; 7 blue, 15 green; 4 red, 7 green, 12 blue; 7 green, 1 blue; 5 blue, 9 green, 1 red`

const parseColorString = input => {
  const games = input.split('\n')
  const result = []

  games.forEach(game => {
    const regex = /^\d+\s*:\s*/;
    const gameFormatted = game.replace(regex, '')
    const showedCubes = gameFormatted.split(';').map( mezclado => {
      const individualCubes = mezclado.trim().split(',').map(cubo => cubo.trim().split(' '))
      const gameObject = {}

      individualCubes.forEach(([count, color]) => {
        gameObject[color.toLowerCase()] = parseInt(count);
      })

      return gameObject
    })

    result.push(showedCubes)
  })

  return result
}

const formattedInput = parseColorString(puzzleinput)

export default formattedInput