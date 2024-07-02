import os
from flask import Flask, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
from highlight_generator import generate_highlights

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['HIGHLIGHT_FOLDER'] = 'highlights'
app.config['ALLOWED_EXTENSIONS'] = {'mp4', 'avi', 'mov'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Process the video and generate highlights
        highlights_path = os.path.join(app.config['HIGHLIGHT_FOLDER'], f'highlight_{filename}')
        generate_highlights(filepath, highlights_path)
        
        return jsonify({'filename': f'highlight_{filename}'}), 200
    return jsonify({'error': 'Invalid file type'}), 400

@app.route('/highlights/<filename>', methods=['GET'])
def get_highlight(filename):
    return send_from_directory(app.config['HIGHLIGHT_FOLDER'], filename)

if __name__ == '__main__':
    app.run(debug=True)
