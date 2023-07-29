document.addEventListener("DOMContentLoaded", function () {
  const executeBtn = document.getElementById("executeBtn");
  const commandInput = document.getElementById("commandInput");
  const outputDiv = document.getElementById("output");

  function executeCommand() {
    const command = commandInput.value.trim().toLowerCase();
    let message = "";

    switch (command) {
      case "merhaba":
        message = "Merhaba, nasılsınız? Umarım iyi bir gün geçiriyorsunuzdur. Size yardımcı olabilmem için 'yardım' kodunu kullanabilirsiniz.";
        break;
        case "teşekkürler":
          message = "Size yardımcı olabildiysem ne mutlu bana. İyi eğlenceler ve iyi günler dilerim.";
          break;
      case "yardım":
        message = "Komutlar: hakkında sumfetch kimsin amaç spotify instagram tarih havadurumu quickabdest kimim sürpriz ";
        break;
        case "hakkında":
          message = "Emir, 14,boğa, kedisi var(Mia), satranç, müzik, sanat, edebiyat, komiklikler, bilgisayar ve yazılıma ilgili.";
          break;
          case "sumfetch":
           message = "Instagram ve Spotify komutlarını da kullanmalısın.";
            break;
              message = "Bu çok kaba oldu. 'hakkında' kullanırsan daha nazik olur.";
              break;
              case "amaç":
                message = "Şuanda ve gelecekte projelerimi paylaşmak için/binevi cv niyetine açtığım site.";
                break;
                case "tarih":
                  message = "Takvime ya da telefonuna bakmayı bilmelisin dostum.";
                  break;
                  case "havadurumu":
                    message = "Pencereden dışarısı cevabı gösteriyor.";
                    break;
                    case "kimim":
                      message = "Ziyaretçi? Bilmem, kimsin?";
                      break;
                      case "sürpriz":
                        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "Tüm güç bende.");
                        break;
                        case "quickabdest":
                          message = "Tamam dostum, artık abdestlisin 👌";
                        break;
                          case "spotify":
                            window.open("https://open.spotify.com/user/31tsxmadimijk3aofa3yh5pskjhy?si=751caad4c16d43ca&nd=1", "Spotify");
                            break;
                            case "instagram":
                              window.open("https://www.instagram.com/e3m1rrq/", "Instagram");
                              break;


      default:
        message = "Geçerli bir komut girin veya belirli komutları deneyin (merhaba, yardım, teşekkürler).";
    }

    outputDiv.innerHTML = `<p><strong>Komut: </strong>${command}</p><p><strong>Sonuç: </strong>${message}</p>`;

    commandInput.value = "";
  }

  executeBtn.addEventListener("click", function () {
    executeCommand();
  });

  commandInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      executeCommand();
    }
  });
});
