const medalSystem = () => {

    const getStr = (data) => {
        var str = data['value'];
        if(data['notice'] != ""){
          str += "<br>（" + data['notice'] + "）";
        }
        return str;
      }

    const numbers = [ 14, 4, 5, 8, 15, 10 ];
    const profiles = [
        ['連結子会社', 'renketsu'],
        ['海外子会社', 'kaigai'],
    ];

    window.addEventListener('DOMContentLoaded', () => {

        // 各種数字
        fetch('/g_common/json/numbers.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                  numbers.forEach(num => {

                    const filteredData = data.filter( d => d.id === String(num) );

                    const str = getStr( filteredData[0] );
                    document.getElementById(`j-numbers__${num}`)
                    .insertAdjacentHTML('afterbegin', str);

                  });

            })
            .catch((error) => {
                console.log("json読み込みエラー：" + error.message);
            });
        
        // プロフィール
        fetch('/g_common/json/profiles.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                // 連結、海外
                profiles.forEach( p => {

                    const str = data.reduce((acc, cur) => {
                        if ( cur[0] === p[0] ) {
                            acc += `<div>${cur[1]}</div>`;
                        }
                        return acc
                    }, '');

                    document.getElementById(`j-profiles__${p[1]}`)
                    .insertAdjacentHTML('afterbegin', str);

                });

                //その他
                const count = data.filter(d => d[0] === 'その他').length;
                document.getElementById('j-profiles__others-count').innerText = count;

            })
            .catch((error) => {
                console.log("json読み込みエラー：" + error.message);
            });

    })

}

export default medalSystem;