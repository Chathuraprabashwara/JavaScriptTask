function MaximalSquare(strArr) {

    let maxArea = 0
    let bool = true;

    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < strArr[i].length; j++) {

            if (strArr[i][j] == 1) {

                if (maxArea < 1) {
                    maxArea = 1;
                }

                let Y = i;
                let X = j;
                let count = 1;

                for (let x = j + 1; x < strArr[i].length; x++) {

                    Y++;
                    X++;
                    count++;

                    if (Y >= strArr.length) {
                        continue;
                    }

                    if (strArr[i][x] == 0) {
                        continue;
                    }

                    for (let y = i + 1; y <= Y; y++) {
                        for (let k = j; k <= X; k++) {
                            if (strArr[y][k] == 0) bool = false;
                        }
                    }

                    if (bool) {
                        let area = count * count;
                        if (maxArea < area) {
                            maxArea = area;
                        }
                    }
                }
            }
        }
    }

    console.log(`Output : ${maxArea}`);
}

MaximalSquare([[1, 1, 1,  1],  
                [1, 1, 1, 1],  
                [1, 1, 1,  1],
                [1, 1, 1, 1],
                ]
)