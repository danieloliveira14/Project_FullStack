from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def main():
    n1 = request.args.get("nota1", type=float)
    n2 = request.args.get("nota2", type=float)
    if n1 and n2:
        if n1 > 10 or n2 > 10 or n1 < 0 or n2 < 0:
            return "insira uma nota valida"
        m = str((n1 + n2) / 2)
        return f"A sua media foi:{m}"
    return "<h1>Insira suas notas.</h1>"

if __name__ == '__main__':
    app.run()
